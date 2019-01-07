import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
    createDb() {
        let initTrendingBetsRacing = [
            {
                isFutures: false,
                meetingName: "STAWELL",
                location: "VIC",
                raceType: "R",
                raceNumber: 1,
                raceName: "aaa",
                runnerNumber: 1,
                runnerName: "LAKESIDE TOURIST HALLS GAP CUP",
                returnWin: 3.3,
                returnPlace: 3.3,
                bettingStatus: "Open",
                propositionNumber: 151000
            },
            {
                isFutures: false,
                meetingName: "DOOMBEN",
                location: "QLD",
                raceType: "R",
                raceNumber: 8,
                raceName: "ICANIWILL CLASS 5 HANDICAP (TO_UPDATE)",
                runnerNumber: 10,
                runnerName: "DREAM MASTER",
                returnWin: 2.2,
                returnPlace: 1.22,
                bettingStatus: "Open",
                propositionNumber: 151070
            },
            {
                isFutures: false,
                meetingName: "CAULFIELD",
                location: "VIC",
                raceType: "R",
                raceNumber: 4,
                raceName: "LADBROKES LIVE STREAMING HANDICAP (TO_DELETE)",
                runnerNumber: 4,
                runnerName: "VON MYSTIC",
                returnWin: 2.9,
                returnPlace: 1.4,
                bettingStatus: "Open",
                propositionNumber: 150784
            },
            {
                isFutures: false,
                meetingName: "CAULFIELD",
                location: "VIC",
                raceType: "R",
                raceNumber: 5,
                raceName: "LADBROKES MULTIVERSE HANDICAP (S)",
                runnerNumber: 3,
                runnerName: "CRITICAL THINKING",
                returnWin: 3.2,
                returnPlace: 1.4,
                bettingStatus: "Open",
                propositionNumber: 150803
            }
        ];
        // ===============================
        let updateTrendingBetsRacing = [
            {
                isFutures: false,
                meetingName: "STAWELL (S)",
                location: "VIC",
                raceType: "R",
                raceNumber: 1,
                raceName: "aaa",
                runnerNumber: 1,
                runnerName: "LAKESIDE TOURIST HALLS GAP CUP",
                returnWin: 3.3,
                returnPlace: 3.3,
                bettingStatus: "Open",
                propositionNumber: 151000
            },
            {
                isFutures: false,
                meetingName: "DOOMBEN (U)",
                location: "QLD",
                raceType: "R",
                raceNumber: 8,
                raceName: "ICANIWILL CLASS 5 HANDICAP (TO_UPDATE)",
                runnerNumber: 10,
                runnerName: "DREAM MASTER",
                returnWin: 1.1,
                returnPlace: 1.1,
                bettingStatus: "Open",
                propositionNumber: 151070
            },
            {
                isFutures: false,
                meetingName: "CAULFIELD (U)",
                location: "VIC",
                raceType: "R",
                raceNumber: 4,
                raceName: "LADBROKES LIVE STREAMING HANDICAP (TO_DELETE)",
                runnerNumber: 4,
                runnerName: "VON MYSTIC",
                returnWin: 1.1,
                returnPlace: 1.1,
                bettingStatus: "Open",
                propositionNumber: 150784
            },
            {
                isFutures: false,
                meetingName: "STAWELL (N)",
                location: "VIC",
                raceType: "R",
                raceNumber: 6,
                raceName: "LADBROKES MULTIVERSE HANDICAP (S)",
                runnerNumber: 3,
                runnerName: "CRITICAL THINKING",
                returnWin: 6.66,
                returnPlace: 6.66,
                bettingStatus: "Open",
                propositionNumber: 150666
            }
        ];

        return { initBets: initTrendingBetsRacing, updatedBets: updateTrendingBetsRacing };
    }
} 
