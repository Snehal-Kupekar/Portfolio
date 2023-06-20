import React from 'react'
import { Tooltip,Paper } from '@mui/material'

const SkillItem = ({title , image , placement , styles}) =>{
  return (
    <>
    <Tooltip title={title} placement={placement} arrow>
                    <Paper
                      sx={{
                        // backgroundImage: `url(${image})`,
                        // backgroundSize: "cover",
                        // backgroundPosition: "center",
                        backgroundColor:"#232F34" ,
                        boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                      }}
                      
                    >
                      <Paper elevation={0} sx={{width:80 , height:80 , background:"red" , margin:"16px auto 0 auto" ,backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundColor:"#232F34" , }}
                        className={styles["hover-animation"]}
                        >

                      </Paper>
                    </Paper>
                  </Tooltip>
    </>
  )
}


export default SkillItem;