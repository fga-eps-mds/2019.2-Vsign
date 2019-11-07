class IdConfirmJob < ApplicationJob
  queue_as :default

def perform(contract_id)
    @contract = Contract.find(contract_id)
    @user = @contract.user
    @document = @user
    
  end

  private 

  def id_confirm(document_image)
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
          name: document_image
        },
      },
      max_label: 20,
      mun_confidence: 90.0
    }

    response = cliente.detect_labels attrs
    response.labels.each do |labels|
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
