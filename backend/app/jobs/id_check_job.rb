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
      if blocks.block_type === "KEY_VALUE_SET" #"KEY_VALUE_SET"
        blocks.relationships.each do |rela|
          puts "\n" + rela.type
          if rela.type === "CHILD"
            rela.ids.each do |i|
              puts i
              resp.blocks.each do |b|
                puts b.id + "-------" + b.block_type
                if i === b
                if b.id === i && b.block_type === "LINE"
                  puts 'MATCH'
                end
              end
            end
          end
        end
      end
    end

  end
  
end