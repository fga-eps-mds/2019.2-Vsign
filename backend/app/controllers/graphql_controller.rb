# frozen_string_literal: true

# Controller que trata as requests GraphQL.
class GraphqlController < ApplicationController
  def execute
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    context = {
      current_user: current_user,
      login: method(:sign_in)
    }
    result = Schema.execute(
      query, 
      variables: variables, 
      context: context, 
      operation_name: operation_name
    )
    result = execute_schema
    render json: result
  rescue StandardError => e
    raise e unless Rails.env.development?

    handle_error_in_development e
  end

  private

  def execute_schema
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    context = {}
    Schema.execute(
      query, variables: variables, context: context,
             operation_name: operation_name
    )
  end

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      handle_ensure_hash_string ambiguous_param
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end

  def handle_ensure_hash_string(ambiguous_param)
    if ambiguous_param.present?
      ensure_hash(JSON.parse(ambiguous_param))
    else
      {}
    end
  end

  def handle_error_in_development(error)
    logger.error error.message
    logger.error error.backtrace.join("\n")

    render json: { 
      error: { 
        message: e.message, 
        backtrace: e.backtrace 
      }, 
      data: {} 
    }, status: 500
  end
end
