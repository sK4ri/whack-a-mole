package com.codecool.homenetwork.device.deviceTypes;

import com.codecool.homenetwork.HomeNetwork;
import com.codecool.homenetwork.device.Device;

public class Connected extends Device {

    public Connected(int age, int batteryLife) {
        super(age, batteryLife);
    }

    public int getNumberOfConnectedDivices(HomeNetwork hn) {
        int numOfConn = 0;
        for (Device dev : hn.getListOfDevices()) {
            if (dev instanceof Connected) {
                numOfConn++;
            }
        }
        return numOfConn - 1;
    }

    public int getRemainingPower(HomeNetwork hn) {
        return this.batteryLife = (batteryLife - (7 * this.age)) + getNumberOfConnectedDivices(hn) * 20;
    }
}
