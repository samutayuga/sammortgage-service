/* eslint-disable @typescript-eslint/no-unused-vars */
import { Typography, Slider } from "@mui/material";
import { Stack } from "@mui/system";
import { SliderProps } from "../../model";

const SliderComponent = (sliderProps: SliderProps) => {
    const { defaultValue,
        sliderMin,
        slidermax,
        sliderLabel,
        sliderUnit,
        onChange,
        sliderAmount,
        sliderValue,
        sliderSteps } = sliderProps
    return (
        <Stack my={1.4}>
            <Stack gap={1}>
                <Typography variant="subtitle1">{sliderLabel}</Typography>
                <Typography variant="h5">
                    {sliderUnit} {sliderAmount}
                </Typography>
            </Stack>
            <Slider
                min={sliderMin}
                max={slidermax}
                defaultValue={defaultValue}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={onChange}
                value={sliderValue}
                marks
                step={sliderSteps}
            />
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="caption" color="text.secondary">
                    {sliderUnit} {sliderMin}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {sliderUnit} {slidermax}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default SliderComponent;