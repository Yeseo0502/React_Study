import { useState } from "react";

function Like() {
    const [liked, setLiked] = useState(false)

    return (
        <button onClick={() => setLiked(!liked)}>
            {liked ? '좋아요취소' : '좋아요'}
        </button>
    )


}

export default Like;