import { Box, Button, Container, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import useIsMobile from '../../hook/useIsMobile'
import { ContentCopyOutlined, DownloadOutlined, GetAppOutlined, InsertDriveFileOutlined, Person2Outlined, Search } from '@mui/icons-material'
import DataTable from '../../common/DataTable'
import { useQuery } from '@tanstack/react-query'
import { axiosReq } from '../../utils/axiosReq'

const data = [
  {
    id: 1,
    title: '907 – Responsive Multi-Purpose WordPress Theme',
    category: 'Theme',
    updateOn: 'January 20, 2022',
    version: '5.1.5'
  },
  {
    id: 2,
    title: 'Add To Cart Redirect for WooCommerce',
    category: 'Plugins',
    updateOn: 'January 20, 2022',
    version: '3.4.0'
  },
  {
    id: 3,
    title: 'AdForest – Classified Ads WordPress Theme',
    category: 'Themes',
    updateOn: 'January 20, 2022',
    version: '2.0.2'
  },
  {
    id: 4,
    title: 'Avada | Website Builder For WordPress & WooCommerce',
    category: 'Themes',
    updateOn: 'January 20, 2022',
    version: '2.0.2'
  },
  {
    id: 5,
    title: 'Avada | Website Builder For WordPress & WooCommerce',
    category: 'Themes',
    updateOn: 'January 20, 2022',
    version: '2.0.2'
  },
  {
    id: 6,
    title: 'Avada | Website Builder For WordPress & WooCommerce',
    category: 'Themes',
    updateOn: 'January 20, 2022',
    version: '2.0.2'
  },
]

const Resourse = () => {
  const [search, setSearch] = useState('')
  const isMobile = useIsMobile()

  const { data: resourses, isLoading } = useQuery({
    queryKey: ['resourse', search],
    queryFn: async () => {
      const res = await axiosReq.get('/resourse/all', {
        params: {
          search: search
        }
      })
      return res.data
    }
  })

  const columns = [
    {
      field: 'Files', headerName: 'Files', width: 500,
      renderCell: (params) => (
        <Stack sx={{ height: '100%' }} direction='row' gap={1.5} alignItems='center'>
          <img style={{ width: '30px' }} src="/file2.svg" alt="" />
          <Stack >
            <Typography >{params.row.name}</Typography>
            {params.row.files && (
              <Typography sx={{ fontSize: '12px', display: 'inline-flex', gap: .5, alignItems: 'center' }}>
                <ContentCopyOutlined sx={{ fontSize: '12px' }} /> {params.row.files} files(s)
              </Typography>
            )}
          </Stack>
        </Stack>
      )
    },
    {
      field: 'Categories', headerName: 'Categories', width: 250,
      renderCell: (params) => (
        <Stack sx={{ height: '100%' }} direction='row' gap={1} alignItems='center'>
          <Typography>{params.row.category}</Typography>
        </Stack>
      )
    },
    // {
    //   field: 'updateOn', headerName: 'Update On', width: 200,
    //   renderCell: (params) => (
    //     <Stack sx={{ height: '100%' }} direction='row' gap={1} alignItems='center'>
    //       <Typography>{params.row.updateOn}</Typography>
    //     </Stack>
    //   )
    // },
    {
      field: 'version', headerName: 'Version', width: 200,
      renderCell: (params) => (
        <Stack sx={{ height: '100%' }} justifyContent='center'>
          <Typography>{params.row.version}</Typography>
        </Stack>
      )
    },

    {
      field: 'Download', headerName: '', width: 150,
      renderCell: (params) => <IconButton onClick={() => window.open(params.row.url, '_blank')} ><DownloadOutlined /></IconButton>
    },
  ];

  return (
    <Box>
      <Stack alignItems='center' justifyContent='center' sx={{
        height: '200px',
        backgroundImage: 'url(/section-top.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <Typography sx={{ fontSize: { xs: '20px', md: '30px' }, color: 'primary.main', fontWeight: 600, mb: 2 }}>Downloadable Resourse</Typography>
        <BreadCrumb page='Resourse' />
      </Stack>

      <Container maxWidth='xl' sx={{ py: 4 }}>
        <Typography variant='h5' sx={{ textAlign: 'center' }}>Total Resources: {resourses?.length}</Typography>

        <Box>
          <TextField
            onChange={(e) => setSearch(e.target.value)}
            size="small"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box mt={4}>
          <DataTable
            columns={columns}
            rows={resourses}
            rowHeight={70}
            getRowId={row => row._id}
            loading={isLoading}
          />
        </Box>

      </Container>
    </Box>
  )
}

export default Resourse