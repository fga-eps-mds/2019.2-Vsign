import React from 'react';
import { ScriptBlock } from "./styles"


export default function ScriptCard({ content }) {
    return (
        <div className="card" data-tour='step4'>
            <div className="card-body">
                <ScriptBlock>{content}</ScriptBlock>
            </div>
        </div>
    );
}
