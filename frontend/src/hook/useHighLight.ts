import { useState, useEffect, useRef } from "react";

export default function useHighLight() {
    const element = useRef<any>()

    useEffect(() => {
        if (element.current) {
            element.current.style = { color: 'teal' };
        }

    }, [])

    return element;
}