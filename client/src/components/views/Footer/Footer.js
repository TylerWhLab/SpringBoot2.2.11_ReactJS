import React from 'react'
import { SmileOutlined } from '@ant-design/icons';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> 김정균 샵  <SmileOutlined /></p>
           
        </div>
    )
}

export default Footer