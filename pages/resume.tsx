import React, {FC} from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";
import Head from "next/head";
import {percent} from "csx";

export interface resumeProps {

}

const getStyles = computedFn(() => (stylesheet({
    wrap: {
        padding: 32,
    },
    header: {
        position: "relative",
        display: "flex",
        height: 240,
        borderBottom: `1px solid #d1d1d1`
    },
    header_vLine: {
        position: "absolute",
        top: -32,
        left: percent(30),
        width: 2,
        height: percent(100),
        backgroundColor: '#000',
        borderRadius: 2,
    },
    name: {
        width: percent(30),
        padding: 16,
        fontSize: 64,
        fontFamily: "'Source Sans Pro', sans-serif",
        lineHeight: 1.1,
    },
})))

const resume: FC<resumeProps> = (props) => {
    let styles = getStyles()

    return (
        <>
            <Head>
                <title>Resume</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet"/>
            </Head>
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <div className={styles.header_vLine}/>
                    <div className={styles.name}>
                        Eddie Hsu
                    </div>
                </div>
            </div>
        </>
    )
}

export default observer(resume)
