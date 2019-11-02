class FaceMatchJob < ApplicationJob
  queue_as :default

  def perform(*args)
    client = Aws::Rekognition::Client.new({
      region: Rails.application.credentials.dig(:aws, :region),
      credentials: Aws::Credentials.new(
        Rails.application.credentials.dig(:aws, :access_key_id),
        Rails.application.credentials.dig(:aws, :secret_access_key))
    })

    attrs = {
      source_image: {
        s3_object: {
          bucket: Rails.application.credentials[Rails.env.to_sym][:aws][:bucket],
          name: 'file'
        },
      },
      target_image: {
        s3_object: {
          bucket: Rails.application.credentials[Rails.env.to_sym][:aws][:bucket],
          name: 'file'
        },
      },
      similarity_threshold: 80
    }

    response = cliente.compare_faces attrs
    response.face_matches.each do |face_match|
      position = face_match.face.bounding_box
      similarity = face_match.similarity
      puts "#{position.left}, #{position.top} matches with #{similarity}"
    end
  end
end
