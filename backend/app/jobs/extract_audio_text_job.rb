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

      confidence = response.results.alternatives.trasncript.confidence
      text = response.results.alternatives.trasncript.to_s

      script = join_script_text(contract.script)
      percent_of_equality = compare(text, script)

      if confidence <= 0.50 # Value to failed based in confidence of the transcript, change if necessary
        change_contract_status(-1.00)
      else
        change_contract_status(percent_of_equality)
      end
 
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

  def change_contract_status(percent)
    if percent >= 0.75
      @contract.status = "Contract validated"
    else
      @contract.status = "Audio error, parameter not satisfied"
    end
  end
end