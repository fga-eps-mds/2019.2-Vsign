class ReportWebhookJob < ApplicationJob
  queue_as :default

  def perform(contract_id)
    @contract = Contract.find(contract_id)
    @script = @contract.script

    @user = @contract.user

    webhook = @script.webhook
    url = URI.unescape(webhook)
    
    begin
      RestClient.post(url, {
        title: @script.title,
        order: @contract.order,
        email: @user.email,
        result: @contract.status,
        message: @contract.message
      })
    rescue RestClient::ExceptionWithResponse => e
      e.response
    end

  end
end
