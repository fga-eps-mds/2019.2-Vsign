class ReportWebhookJob < ApplicationJob
  queue_as :default

  def perform(contract_id, company_id)
    @contract = Contract.find(contract_id)
    @script = Script.find(company_id)

    webhook = @script.webhook
    url = URI.unescape(webhook)
    
    @user = @contract.user
    
    RestClient.post(url, {
      title: @script.title
      order: @contract.order,
      email: @user.email,
      result: @script.status
    })    

  end
end
