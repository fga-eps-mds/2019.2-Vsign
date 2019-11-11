class IdCheckJob < ApplicationJob
  queue_as :default
  
  def perform(*args)
    client = Aws::Textract::Client.new({
      region: Rails.application.credentials.dig(:aws, :region),
      credentials: Aws::Credentials.new(
        Rails.application.credentials.dig(:aws, :access_key_id),
        Rails.application.credentials.dig(:aws, :secret_access_key))
    })
    resp = client.analyze_document({
      document: {
        s3_object: {
          bucket: Rails.application.credentials[Rails.env.to_sym][:aws][:bucket],
          name: 'IMAGE 2019-10-26 18:26:52.jpg' # 'file' =  'IMAGE 2019-10-26 18:26:52.jpg'
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