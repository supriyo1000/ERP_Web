import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import details from './FeatureDetails'

export default function Feature() {
  const params = useParams<{ featureID: string }>()
  const detail = details.filter(detail => detail.featureID === params.featureID)[0]
  useEffect(() => {
    if (detail !== undefined) document.title = `${detail.title} | eazzyBizz`
    else throw new Error("Feature not found")
  }, [])
  return (
    <detail.sectionComponent />
  )
}