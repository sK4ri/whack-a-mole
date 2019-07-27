package com.codecool.homenetwork.device;

import com.codecool.homenetwork.device.deviceTypes.DevicesWithScreen.Normal;
import com.codecool.homenetwork.device.deviceTypes.ScreenSize;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class DeviceTest {

    @Test
    void getRemainingPower() {
        List<Device> list = new ArrayList<>();
        list.add(new Normal(10, 1000, 2001, ScreenSize.EDTV));
        assertEquals(1940, list.get(0).getRemainingPower());
    }
}