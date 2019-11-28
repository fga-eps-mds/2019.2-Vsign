class ExtractAudioTextJob < ApplicationJob
  queue_as :default


  def perform(contract_id)
    @contract = Contract.find(contract_id)

    if @contract.audio.attached?
      binary = @contract.audio.download
      speech = Google::Cloud::Speech.new
      config = {
        encoding: :LINEAR16,
        language_code: "pt-BR",
        model: "default"
      }
      audio  = { content: binary }
      response = speech.recognize(config, audio)

      confidence = response.results.first.alternatives.first.confidence.to_f
       
      script = join_script_text(@contract.script)

      ### Instead of the PUTS change for the contract status updating 
      if confidence <= 0.50 || percent_of_equality <= 0.70
        @contract.status = :rejected
      elsif percent_of_equality >= 0.70
        @contract.status = :approved
        NotifyUserResultJob.perform_later @contract.id
      end
      @contract.save
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

end