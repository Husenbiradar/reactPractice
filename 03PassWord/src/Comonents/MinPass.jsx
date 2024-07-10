import { useCallback, useEffect, useRef, useState } from 'react'


function MinPass() {

    const [password, setPassword] = useState('')
    const [length, setLength] = useState(8)
    const [number, setNumber] = useState(false)
    const [Charector, setCharector] = useState(false)

    const PassswordGenrator = useCallback(() => {
        let pass = ''
        let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        let char = '~!@#$%^&*()_+=-><?/]['
        let num = '1234567890'
        if (number) string += num
        if (Charector) string += char

        for (let i = 0; i < length; i++) {
            let letter = Math.floor(Math.random() * string.length + 1)
            pass += string.charAt(letter)
        }
        setPassword(pass)

    }, [length, number, Charector, setPassword])

    useEffect(() => {
        PassswordGenrator()
    }, [length, number, Charector, PassswordGenrator])


    const refPas = useRef(null)

    const CoppyBtn = useCallback(() => {
        refPas.current.select()
        window.navigator.clipboard.writeText(password)
    }, [password])
    return (
        <>
            <div className="box" style={{ backgroundColor: 'gray', padding: '50px' }}>
                <div style={{ paddingBottom: '40px' }}>
                    <input type="text" style={{ padding: '7px' }} value={password} ref={refPas} />
                    <button style={{ padding: '5px', backgroundColor: 'green', color: 'white' }} onClick={CoppyBtn} >Coppy</button>
                </div>
                <input type="range" value={length} onChange={(e) => { setLength(e.target.value) }} />
                <label htmlFor="" >Length : {length}</label>
                <input type="checkbox" onChange={() => setNumber((prev) => !prev)} />
                <label htmlFor="">Number</label>
                <input type="checkbox" onChange={() => setCharector((prev) => !Charector)} />
                <label htmlFor="">Charector</label>
            </div>
        </>
    )
}

export default MinPass
