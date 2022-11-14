import {useRouter} from 'next/router'

const page = () => {
    const router = useRouter();
    const pagenum = router.query.page;
  return (
    <div>{pagenum} number hai</div>
  )
}

export default page