class ReportWebhookJob < ApplicationJob
  queue_as :default

  def perform(contract_id, company_id)
    @contract = Contract.find(contract_id)
    @script = Script.find(company_id)

    webhook = @script.webhook
    url = URI.unescape(webhook)
    
    @user = @contract.user
    
  end
end
