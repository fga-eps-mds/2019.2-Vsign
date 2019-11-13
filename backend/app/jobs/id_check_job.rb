class IdCheckJob < ApplicationJob
  queue_as :default
  
  def perform(document_id)
    @contract = Contract.find(contract_id)
    @user = @contract.user
    @content = @contract.content
    @document = @user.user_document
    get_text(@document)
  end

  def gettext(document_photo)
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
          name: document_photo # 'file' =  'IMAGE 2019-10-26 18:26:52.jpg' document_photo
        },
      },
    }
    response = client.detect_text attrs

    resp = JSON.parse(response)

    #contract => user => content[{"nome":"Marcos", "cpf":" ", ... }]
    user_name = @content.nome
    user_cpf = @content.cpf
    user_rg = @content.rg 
    user_date = @content.data_nascimento
  
    document_count = 0
    #cpf
    response.text_detections.each do |detections|
      if detections.type === "WORD"
        if detections.text.include?("user_cpf")
          document_count = document_count + 1
        elsif detections.text.include?("user_rg")
          document_count = document_count + 1
        elsif detections.text.include?("user_date")
          document_count = document_count + 1
        end
      elsif detections.type === "LINE"
        if detections.text.include?("user_name")
          document_count = document_count + 1
        end
      end
    end
    
    perform_next_job(document_count)

  end
  
  def perform_next_job(document_count)
    
    if document_count < 2
      FaceMatchJob.perform_later contract.id
    else
      @contract.status = "error, document validation fail"
    end

  end
   
end