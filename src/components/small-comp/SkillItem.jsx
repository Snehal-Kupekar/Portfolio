import React from 'react'
import { Tooltip,Paper } from '@mui/material'

const SkillItem = ({title , image , placement , styles}) =>{
  return (
    <>
    <Tooltip title={title} placement={placement} arrow>
                    <Paper
                      sx={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        border: "6px solid #fff",
                        boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                      }}
                      className={styles["hover-animation"]}
                    ></Paper>
                  </Tooltip>
    </>
  )
}


export default SkillItem;