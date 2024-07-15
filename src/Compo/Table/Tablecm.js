import './Tablecm.css';
import React from 'react';

const Tablecm = () => {
    // Generate 20 rows dynamically
    const rows = [];
    for (let i = 0; i < 20; i++) {
        rows.push(
            <tr key={i}>
                <td className='thf'>Data 1</td>
                <td>Data 2 </td>
                <td>Data 3 </td>
                <td>Data 4 </td>
                <td>Data 5 </td>
                <td>Data 6 </td>
                <td className='thl'>Data 7 </td>

            </tr>
        );
    }
    const srcclick =()=>{
        document.getElementById('srcd').style.width='250px'
        
    }
    const srcclick2 =()=>{
        document.getElementById('srcd').style.width='35px'
        
        document.getElementById('srcint').value=null;
    }

    return (
        <>
            <div className="tbldb">
                <h4>All ORDER INFROMATION LIST</h4>
                <div className='tblhd '>
                    <table>
                        <thead>
                            <tr>
                                <th className="thf">Column 1</th>
                                <th>Column 2</th>
                                <th>Column 3</th>
                                <th>Column 4</th>
                                <th>Column 5</th>
                                <th>Column 6</th>
                                <th className="thl">Column 7</th>

                            </tr>

                        </thead>
                    </table>
                </div>
                <div className='tbldt custom-scrollbar'>
                    <table>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
                


            </div >
            <div className='viewinfo'>
                <div className='srcdiv' id='srcd'>
                <button className='srcbtn' onClick={srcclick}><i class="bi bi-search"></i></button>
                    <input type='text' id='srcint'
                        placeholder='Search By ID'
                    ></input>
                    <button className='srcbtn' onClick={srcclick2}><i class="bi bi-caret-left-fill"></i></button>
                </div>
                <h4>Order Information</h4>
            </div>
            <div className='viewinfo1'>
                <h4>Product Information</h4>
            </div>
            <div className='viewinfo1'>
                <h4>Partner Information</h4>
            </div>
        </>
    );
};

export default Tablecm;
