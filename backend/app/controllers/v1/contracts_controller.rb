class ContractsController < ApplicationController

    before_action :set_company

    def create
    end

    private

        def set_company
            api_key = params[:api_key]
            @company = Company.find(api_key: api_key)
        end

        def set_script
            kind = params[:kind]
            @script = Script.query(company: @company, kind: kind).order("RANDOM()").first
        end

        def set_user
            email = params[:email]
            @user = User.find_or_create_by(email: email) do |user|
                user.name = params[:name]
                user.password = '123456',
                user.password_confirmation = '123456'
            end
        end

        def contract_params
            params.require(:contract).permit(
                :order,
                :name,
                :email,
                :api_key,
                :kind,
                :content
            )
        end

end