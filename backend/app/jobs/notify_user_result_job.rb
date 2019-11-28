class NotifyUserResultJob < ApplicationJob
    queue_as :default
  
    def perform(contract_id)
        
        @contract = Contract.find(contract_id)
        template_id = nil

        if @contract.status == :approved
            template_id = 'd-78a9df2f4bd545f1bf5ad7cc2ffccf81'
        elsif @contract.status == :rejected
            template_id = 'd-71801bb758d94e159047450a6f182759'
        end

        SendgridMailer.send(@contract.user.email, {
            name: @contract.user.name
        }, template_id)

        ReportWebhookJob.perform_later contract.id
  
    end
  end
  