import Step from "../Step";

interface ActProps {
    bosses: string [];
    steps: Step [];
}

const Act1 = () => {
    return (
        <>
            <div className={"actTitle"}>ACT 1</div>
            <ul>
                <li>
                    <label className={'flex flex-row'}>
                        <div>
                            <input type={'checkbox'} className={'check'}/>
                        </div>
                        <div className={'flex'}>
                            <p>On </p>
                            <span className={'zone'}>The Twilight Strand </span>
                            <p> kill first mob ➞ </p>
                            <span className={'boss'}>Hillock</span>
                        </div>
                    </label>
                </li>
                <li>
                    <label className={'flex flex-row'}>
                        <div>
                            <input type={'checkbox'} className={'check'}/>
                        </div>
                        <div className={'flex'}>
                            <p>Turn in</p>
                            <span className={'quest'}>Enemy at the Gate</span>
                        </div>
                    </label>
                </li>
            </ul>
        </>
    )
}

export default Act1;