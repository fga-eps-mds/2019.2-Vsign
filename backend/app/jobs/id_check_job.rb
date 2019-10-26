class IdCheckJob < ApplicationJob
  queue_as :default

  require 'aws-sdk'

  client = Aws::Reckgnition::Client.new

  def perform(*args)
    # Do something later
    resp = client.detect_text({
    image: { # required
      bytes: "data",
      s3_object: {
        bucket: "S3Bucket",
        name: "S3ObjectName",
        version: "S3ObjectVersion",
      },
    },
  })
  end
end
