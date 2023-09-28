import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../../css/mystyles.css"

const footerPage: React.FC<PageProps> = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    created by nao
                </p>
            </div>
        </footer>
    )
}

export default footerPage
