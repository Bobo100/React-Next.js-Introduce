import { Prism } from "react-syntax-highlighter"
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
export const CommonPrism = ({ children }: { children: string }) => {
    return (
        <div className="code-block-container">
            <Prism className="code-block" language="javascript" style={vscDarkPlus} showLineNumbers={true}>
                {children}
            </Prism>
        </div>
    )
}

export const CommonPrismHhtml = ({ children }: { children: string }) => {
    return (
        <div className="code-block-container">
            <Prism className="code-block" language="html" style={vscDarkPlus} showLineNumbers={true}>
                {children}
            </Prism>
        </div>
    )
}