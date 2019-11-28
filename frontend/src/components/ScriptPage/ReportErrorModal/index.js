import React from 'react';

export default function ReportErrorModal() {
    return (
        <div className="modal fade" id="report-error-modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Reportar Erro</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="alert alert-danger">Escreva o que encontrou de errado em seu contrato. Ele será enviado para revisão de informações e estará indisponível durante a análise.</div>
                    <form>
                        <textarea className="form-control" rows="5" />
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-success">Reportar Erro</button>
                </div>
                </div>
            </div>
        </div>
    );
}
