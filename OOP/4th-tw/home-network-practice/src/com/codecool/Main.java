package com.codecool;

import com.codecool.homenetwork.HomeNetwork;
import com.codecool.homenetwork.device.Device;
import com.codecool.homenetwork.device.deviceTypes.Connected;
import com.codecool.homenetwork.device.deviceTypes.DevicesWithScreen.Normal;
import com.codecool.homenetwork.device.deviceTypes.DevicesWithScreen.Smart;
import com.codecool.homenetwork.device.deviceTypes.ScreenSize;

public class Main {
    public static void main(String[] args) {
        HomeNetwork hn = new HomeNetwork();

        hn.addDevice(new Normal(10, 1000, 2001, ScreenSize.EDTV));
        hn.addDevice(new Normal(10, 1000, 1999, ScreenSize.EDTV));
        hn.addDevice(new Connected(1, 100));
        hn.addDevice(new Connected(10, 100));
        hn.addDevice(new Connected(5, 100));
        hn.addDevice(new Smart(1, 80, "SmartDevice1", ScreenSize.FULLHD));
        hn.addDevice(new Smart(2, 70, "SmartDevice2", ScreenSize.UHD));
        hn.addDevice(new Smart(3, 60, "SmartDevice3", ScreenSize.HD));

        for (Device dev : hn.getListOfDevices()) {
            System.out.println(dev.getClass().getSimpleName());
            if (dev instanceof Connected) {
                System.out.println(((Connected) dev).getRemainingPower(hn));
            } else {
                System.out.println(dev.getRemainingPower());
            }
        }
    }

}
