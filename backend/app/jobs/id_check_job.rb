class IdCheckJob < ApplicationJob
  queue_as :default
  
  def perform(document_id)
    @contract = Contract.find(contract_id)
    @user = @contract.user
    @document = @user.user_document
    get_text(@document)
  end

  private 

  def get_text(document_photo)
    client = Aws::Rekognition::Client.new({
      region: Rails.application.credentials.dig(:aws, :region),
      credentials: Aws::Credentials.new(
        Rails.application.credentials.dig(:aws, :access_key_id),
        Rails.application.credentials.dig(:aws, :secret_access_key))
    })
    
    attrs = {
      image: {
        s3_object: {
          bucket: Rails.application.credentials[Rails.env.to_sym][:aws][:bucket],
          name: document_photo # 'file' =  'IMAGE 2019-10-26 18:26:52.jpg'
        },
      },
      feature_types: ["FORMS"]
    })

    resp.blocks.each do |blocks|
      text = []
      if blocks.block_type === "LINE" && blocks.confidence >= 90 #"KEY_VALUE_SET"
        text = blocks.text
        puts text
      end
    end

  end
  
end