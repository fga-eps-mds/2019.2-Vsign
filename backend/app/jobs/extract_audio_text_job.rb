class ExtractAudioTextJob < ApplicationJob
  queue_as :default


  def perform(contract_id)
    @contract = Contract.find(contract_id)

    if @contract.audio.attached?
      binary = @contract.audio.download
      # file_name = __dir__+"/porto.wav"
      # audio_file = File.binread file_name
      speech = Google::Cloud::Speech.new
      config = {
        encoding: :LINEAR16,
        language_code: "pt-BR",
        model: "default"
      }
      audio  = { content: binary }
      # audio  = { content: audio_file }
      response = speech.recognize(config, audio)

       confidence = response.results.first.alternatives.first.confidence.to_f
       
       text = response.results.first.alternatives.first.transcript.to_s
       
       script = join_script_text(@contract.script)
       
       percent_of_equality = compare(text, script)
       
      if confidence <= 0.50 # Value to failed based in confidence of the transcript, change if necessary
        # change_contract_status(-1.00)
        puts "Audio com baixa taxa de confiança"
      elsif percent_of_equality >= 0.70
        # change_contract_status(percent_of_equality)
        puts "Aprovado"
      elsif percent_of_equality <= 0.70
        puts "Não foi falado o que está no contrato"
      end
    end
  end


  private
  def compare(extracted_audio, contract_script)
    require 'fuzzystringmatch'
    comparation = FuzzyStringMatch::JaroWinkler.create(:native)
    comparation.getDistance(extracted_audio, contract_script)
  end

  def join_script_text(script_blocks)
    JSON.parse(script_blocks).join(" ")
  end  

  def change_contract_status(percent)
    if percent >= 0.75
      @contract.status = "Contract validated"
    else
      @contract.status = "Audio error, parameter not satisfied"
    end
  end
end