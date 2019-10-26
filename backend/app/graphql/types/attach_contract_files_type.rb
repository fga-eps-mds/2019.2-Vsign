# frozen_string_literal: true

module Types
  # AttachContractFilesType
  class AttachContractFilesType < BaseObject
    description 'Resultado do anexo de arquivos ao contrato.'

    field :success, Boolean, 'Result of the attachment', null: false
  end
end
