class ExtractAudioTextJob < ApplicationJob
  queue_as :default

  def perform(*contract)
    if contract.audio.attached?
      require "google/cloud/speech"

      binary = user.avatar.download
      speech = Google::Cloud::Speech.new
      config = { encoding:          :FLAC,
          audio_channel_count: 2,
           language_code:     "pt-BR" }
      audio  = { content: binary }
      response = speech.recognize(config, audio)
      text = response.results.alternatives.to_s    
    end
  end
end
