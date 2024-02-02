import { useState, useRef, useEffect } from "react"
import { useAppSelector } from "../../../settings/redux/hooks"
import { ColumnContainerFlex } from "../../../template/containers/ColumnContainer"
import { RowContainerBeetwen } from "../../../template/containers/RowContainer"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { BannerUI } from "../ui/BannerUI"
import {
  getBanner,
  postBanner,
  selectBannerValues,
} from "../../../modules/banner/BannerSlice"
import { useAppDispatch } from "../../../settings/redux/hooks"
import { BannerDTO } from "../../../modules/banner/types/ bannerTypes"
import axios from "axios"

export const CategoriesBanner = () => {
  const { banner } = useAppSelector(selectBannerValues)

  let lastBannerImage = banner[banner.length - 1]?.url

  const dispatch = useAppDispatch()

  const [selectedImage, setSelectedImage] = useState(null)

  const triggerEffect = () => {
    dispatch(getBanner())
  }
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0])
  }

  const handleUpload = async () => {
    try {
      if (!selectedImage) {
        console.error("No image selected")
        return
      }

      const formData = new FormData()
      console.log("selected file", selectedImage)
      formData.append("file", selectedImage)

      const token = localStorage.getItem("token")

      const response = await axios.post(
        "http://194.58.121.218:3001/users/admin/upload-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      )
      dispatch(postBanner(response.data))
      console.log("Response:", response.data)
      triggerEffect()

    } catch (error) {
      console.error("Error uploading image:", error)
    }
  }

  useEffect(() => {
    dispatch(getBanner())
    triggerEffect()

  }, [dispatch])

  return (
    <ColumnContainerFlex $pt={30}>
      <TextUI mb={10} ag={Ag["500_14"]} text={"Текущий баннер"} />
      <BannerUI $mb={20}>
        <div
          className="img"
          style={{
            backgroundImage: `url(${lastBannerImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <input
            type="file"
            style={{
              cursor: "pointer",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: 0,
            }}
            onChange={handleImageChange}
          />
        </div>
      </BannerUI>
      <RowContainerBeetwen>
        <ButtonUI $mr={10} $backColor={"red"}>
          <TextUI color={ColorsUI.white} ag={Ag["600_16"]} text={"Удалить"} />
        </ButtonUI>
        <ButtonUI onClick={handleUpload}>
          <TextUI color={ColorsUI.white} ag={Ag["600_16"]} text={"Загрузить"} />
        </ButtonUI>
      </RowContainerBeetwen>
    </ColumnContainerFlex>
  )
}
