import React from 'react'
import { Progress } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';


const Progressbar = (props) => {

    const {
        label,
        percent,
        color,
        data,
    } = props;
    return (
        <tr>
            <td class="text-muted">{label}</td>
            <td class="w-100 px-0">
                {/* <div class="progress progress-md mx-4">
                                                                        <div class="progress-bar bg-primary" role="progressbar" style="width: 70%"
                                                                            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div> */}
                <div>
                    <Progress.Line percent={percent} strokeColor={color} />
                </div>
            </td>
            <td>
                <h5 class="font-weight-bold mb-0">{data}</h5>
            </td>
        </tr>
    )
}

export default Progressbar
