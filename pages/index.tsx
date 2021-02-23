import React, {FC} from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";

export interface indexProps {

}

const getStyles = computedFn(() => (stylesheet({
    wrap: {},
})))

const index: FC<indexProps> = (props) => {
    let styles = getStyles()

    return (
        <div className={styles.wrap}>
            Hello
        </div>
    )
}

export default observer(index)
