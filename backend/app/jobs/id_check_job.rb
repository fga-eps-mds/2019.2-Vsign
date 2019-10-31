class IdCheckJob < ApplicationJob
  queue_as :default
  
  def perform(*args)
    client = Aws::Rekognition::Client.new({
      region: Rails.application.credentials.dig(:aws, :region),
      credentials: Aws::Credentials.new(
        Rails.application.credentials.dig(:aws, :access_key_id),
        Rails.application.credentials.dig(:aws, :secret_access_key))
    })
    resp = client.detect_text({
      image: {
        s3_object: {
          bucket: Rails.application.credentials[Rails.env.to_sym][:aws][:bucket],
          name: 'file' # 'file' =  'IMAGE 2019-10-26 18:26:52.jpg'
        },
      },
    })

    resp.text_detections.each do |text|
      if text.type = "line"
        puts "#{text.detected_text}-#{text.id}"
      end
    end

  end
  
end