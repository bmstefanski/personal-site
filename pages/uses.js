import styled from 'styled-components'
import AutofitGrid from 'components/AutofitGrid'
import Page from 'components/Page'

export default function UsesPage() {
  return (
    <Page title="Uses" description="Hardware stuff">
      <CustomAutofit>
        <Stack>
          <Title>Gaming PC</Title>
          <p>
            <strong>OS:</strong> Windows 10 Home
          </p>
          <p>
            <strong>CPU:</strong> AMD Ryzen 7 5800X
          </p>
          <p>
            <strong>CPU Cooler:</strong> SCFM-2000 Fuma 2
          </p>
          <p>
            <strong>GPU:</strong> RTX 3070 8GB VRAM (from Gigabyte)
          </p>
          <p>
            <strong>MOBO:</strong> ASUS ROG STRIX B550-A
          </p>
          <p>
            <strong>RAM:</strong> Crucial Ballistix 2x16GB DDR4 3200MHz
          </p>
          <p>
            <strong>M.2 SSD:</strong> Samsung SSD 980 1TB
          </p>
          <p>
            <strong>PSU:</strong> Gigabyte P850GM
          </p>
          <p>
            <strong>Case:</strong> SilentiumPC Regnum RG6V Evo TG ARGB (SPC262)
          </p>
          <p>
            <strong>Keyboard:</strong> HyperX Alloy FPS Pro Cherry MX Red
          </p>
          <p>
            <strong>Mouse:</strong> Razer DeathAdder V2
          </p>
          <p>
            <strong>Monitor 1:</strong> MSI Optix 23&apos;8 G242 144Hz
          </p>
          <p>
            <strong>Monitor 2:</strong> LG 22MP57HQ-P
          </p>
        </Stack>
        <Stack>
          <Title>Mac</Title>
          <p>
            <strong>OS:</strong> macOS 11.5
          </p>
          <p>
            <strong>CPU:</strong> Intel i5-1030NG7 (8) @ 1.10GHz
          </p>
          <p>
            <strong>GPU:</strong> Intel Iris Plus Graphics
          </p>
          <p>
            <strong>RAM:</strong> 16GB
          </p>
          <p>
            <strong>External SSD:</strong> Samsung SSD T5 1 TB
          </p>
        </Stack>
        <Stack>
          <Title>General</Title>
          <p>
            <strong>Chair:</strong> Fotel Ergohuman Plus Elite
          </p>
          <p>
            <strong>E-reader:</strong> Kindle 10 White 8GB
          </p>
        </Stack>
      </CustomAutofit>
    </Page>
  )
}

const CustomAutofit = styled(AutofitGrid)`
  --autofit-grid-item-size: 350px;

  @media (max-width: ${(p) => p.theme.breakpoints.sm}) {
    --autofit-grid-item-size: 300px;
  }
`

const Title = styled.div`
  font-weight: bold;
  font-size: ${(p) => p.theme.fontSizes.xl}px;
  margin-bottom: ${(p) => p.theme.spacings.xs}px;
`

const Stack = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: ${(p) => p.theme.spacings['2xs']}px;
  }
`
