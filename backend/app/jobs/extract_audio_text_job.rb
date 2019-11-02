class ExtractAudioTextJob < ApplicationJob
  queue_as :default


  def perform(contract_id)
    @contract = Contract.find(contract_id)

    if @contract.audio.attached?
      binary = @contract.audio.download
      speech = Google::Cloud::Speech.new
      config = { encoding: :FLAC,
          audio_channel_count: 2,
          language_code: "pt-BR" }
      audio  = { content: binary }
      response = speech.recognize(config, audio)
      text = response.results.alternatives.to_s

      script = join_script_text(contract.script)
      percent_of_equality = compare(text, script)

    end
  end


  private
  def compare(extracted_audio, contract_script)
    comparation = FuzzyStringMatch::JaroWinkler.create(:native)
    comparation.getDistance(extracted_audio, contract_script)
  end

  def join_script_text(script_blocks)
    script_blocks.join(" ")
  end  

  def chage_contract_status(percent)
    
    if percent >= 0.75
      @contract.status = "Contract validated"
    else
      @contract.status = "Audio error, parameter not satisfied"
    end
  end

end