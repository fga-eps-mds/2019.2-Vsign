# frozen_string_literal: true

class V1Controller < ApplicationController
  before_action :set_company

  private

  def set_company
    api_key = params[:api_key]
    @company = Company.find_by(api_key: api_key)
    render json: {
      message: 'Empresa não encontrada.'
    }, status: :not_found if @company.nil?
  end
end
