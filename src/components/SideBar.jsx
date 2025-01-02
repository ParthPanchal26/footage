import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

const SideBar = () => {

    const selectedCategory = "New";

    return (
        <Stack
            direction="row"
            sx={{
                overflow: 'auto',
                height: {
                    sx: 'auto',
                    md: '94.1%'
                },
                flexDirection: {
                    md: 'column'
                }
            }}
        >
            {categories.map((categorie) => (
                <button
                    key={categorie.name}
                    className='category-btn'
                    style={{
                        background: categorie.name === selectedCategory && '#FC1503', color: 'white'
                    }}
                >
                    <span
                        style={{ color: categorie.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}
                    >
                        {categorie.icon}
                    </span>
                    <span
                        style={{
                            opacity: categorie.name === selectedCategory ? '1' : '0.8'
                        }}
                    >
                        {categorie.name}
                        </span>
                </button>
            ))
            }
        </Stack>
    )
}

export default SideBar