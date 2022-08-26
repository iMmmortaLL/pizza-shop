import React from "react"
import ContentLoader from "react-content-loader"

const PlaceHolder = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={490}
        viewBox="0 0 280 490"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="129" cy="131" r="131" />
        <rect x="49" y="323" rx="0" ry="0" width="2" height="2" />
        <rect x="-2" y="331" rx="15" ry="15" width="280" height="77" />
        <rect x="231" y="460" rx="0" ry="0" width="0" height="5" />
        <rect x="2" y="429" rx="15" ry="15" width="103" height="28" />
        <rect x="139" y="424" rx="25" ry="25" width="140" height="37" />
        <rect x="1" y="288" rx="15" ry="15" width="274" height="25" />
    </ContentLoader>
)

export default PlaceHolder

