# frozen_string_literal: true

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
    @script = Script.where(company: @company, kind: kind).order('RANDOM()').first
    render json: {
      message: 'Modelo de contrato não encontrado.'
    }, status: :not_found if @script.nil?
  end

  def set_user
    email = params[:email]

    random_password = SecureRandom.urlsafe_base64(8)

    @user = User.find_or_create_by(email: email) do |user|
      user.name = params[:name]
      user.password = random_password
      user.password_confirmation = random_password
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
      content: %i[name installments amount]
    )
    contract_params[:content_attributes] = contract_params.delete :content
    contract_params.permit!
  end
end
