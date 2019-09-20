class V1::ContractsController < V1Controller

    before_action :set_script, :set_user

    def create
        order = params[:order]
        contract = Contract.find_or_create_by(company: @company, order: order) do |contract|
            content = params[:content]
            contract.script = @script.format_content(content)
            contract.user = @user
        end
    end

    private

        def set_script
            kind = params[:kind]
            @script = Script.where(company: @company, kind: kind).order("RANDOM()").first
        end

        def set_user
            email = params[:email]
            @user = User.find_or_create_by(email: email) do |user|
                user.name = params[:name]
                user.password = '123456',
                user.password_confirmation = '123456'
            end
            sign_in @user
            sign_in @user, bypass: true 
        end

        def contract_params
            contract_params = params.require(:contract).permit(
                :order,
                :name,
                :email,
                :api_key,
                :kind,
                content: [:installments, :amount]
            )
            contract_params[:content_attributes] = contract_params.delete :content
            contract_params.permit!
        end

end