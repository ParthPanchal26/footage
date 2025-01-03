import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const SideBar = ({ selectedCategory="New", SetSelectedCategory }) => {

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
            {categories.map((category) => (
                <button
                    key={category.name}
                    className='category-btn'
                    onClick={() => SetSelectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory && '#FC1503', color: 'white'
                    }}
                >
                    <span
                        style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}
                    >
                        {category.icon}
                    </span>
                    <span
                        style={{
                            opacity: category.name === selectedCategory ? '1' : '0.8'
                        }}
                    >
                        {category.name}
                    </span>
                </button>
            ))
            }
        </Stack>
    )
}

export default SideBar