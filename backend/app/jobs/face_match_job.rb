class FaceMatchJob < ApplicationJob
  queue_as :default
  
  def perform(contract_id)
    @contract = Contract.find(contract_id)
    @user = @contract.user
    @user.user_document |document_photo|
    @contract.image.each |image_to_perform| face_matching(image_to_perform.filename, documento_photo.filename)
    
  end
  
  private 
  
  def face_matching(video_image, document_image)
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
          name: document_image
        },
      },
      target_image: {
        s3_object: {
          bucket: Rails.application.credentials[Rails.env.to_sym][:aws][:bucket],
          name: video_image
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


  def perform_next_job(similarity)
    
    if similarity >= 80
      ExtractAudioTextJob.perform_later contract.id
    else
      @contract.status = "error, face matching fail"
    end

  end

end