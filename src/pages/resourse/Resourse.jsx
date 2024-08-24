import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import useIsMobile from '../../hook/useIsMobile'
import { ContentCopyOutlined, GetAppOutlined, InsertDriveFileOutlined, Person2Outlined } from '@mui/icons-material'
import DataTable from '../../common/DataTable'

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
  const isMobile = useIsMobile()
  const columns = [
    {
      field: 'Files', headerName: '', width: 500,
      renderHeader: () => (
        <Typography sx={{ fontSize: { xs: '12px', fontWeight: 600, lg: '15px' } }}>Files</Typography>
      ),
      renderCell: (params) => (
        <Stack sx={{ height: '100%' }} direction='row' gap={1.5} alignItems='center'>
          <img style={{ width: '30px' }} src="/file2.svg" alt="" />
          <Stack >
            <Typography sx={{ fontSize: '14px' }}>{params.row.title}</Typography>
            <Stack direction='row' gap={2} alignItems='center'>
              <Stack direction='row' gap={2}>
                <Typography sx={{ fontSize: '12px', display: 'inline-flex', gap: .5, alignItems: 'center' }}>
                  <ContentCopyOutlined sx={{ fontSize: '12px' }} /> 1 files(s)
                </Typography>
              </Stack>
              <Stack direction='row' gap={2}>
                <Typography sx={{ fontSize: '12px', display: 'inline-flex', gap: .5, alignItems: 'center' }}>
                  <GetAppOutlined sx={{ fontSize: '12px' }} /> 292 downloads
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      )
    },
    {
      field: 'Categories', headerName: '', width: 200,
      renderHeader: () => (
        <Typography sx={{ fontSize: { xs: '12px', fontWeight: 600, lg: '15px' } }}>Categories</Typography>
      ),
      renderCell: (params) => (
        <Stack sx={{ height: '100%' }} direction='row' gap={1} alignItems='center'>
          <Typography>{params.row.category}</Typography>
        </Stack>
      )
    },
    {
      field: 'updateOn', headerName: '', width: 250,
      renderHeader: () => (
        <Typography sx={{ fontSize: { xs: '12px', fontWeight: 600, lg: '15px' } }}>updateOn</Typography>
      ),
      renderCell: (params) => (
        <Stack sx={{ height: '100%' }} direction='row' gap={1} alignItems='center'>
          <Typography>{params.row.updateOn}</Typography>
        </Stack>
      )
    },
    {
      field: 'version', headerName: '', width: 200,
      renderHeader: () => (
        <Typography sx={{ fontSize: { xs: '12px', fontWeight: 600, lg: '15px' } }}>version</Typography>
      ),
      renderCell: (params) => (
        <Stack sx={{ height: '100%' }} direction='row' gap={1} alignItems='center'>
          <Typography>{params.row.version}</Typography>
        </Stack>
      )
    },
    {
      field: 'Download', headerName: '',
      width: isMobile ? 200 : undefined,
      flex: isMobile ? undefined : 1,
      renderHeader: () => (
        <Typography sx={{ fontSize: { xs: '12px', fontWeight: 600, lg: '15px' } }}>Download</Typography>
      ),
      renderCell: (params) => (
        <Stack sx={{ height: '100%' }} direction='row' alignItems='center'>
          <Button variant='outlined' size='small' sx={{ px: 4 }}>Download</Button>
        </Stack>
      )
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
        <Typography variant='h5' sx={{ textAlign: 'center' }}>Total Resources: 49</Typography>

        <Box mt={4}>
          <DataTable columns={columns} rows={data} />
        </Box>

      </Container>
    </Box>
  )
}

export default Resourse