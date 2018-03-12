import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();

// Get all Lanes
router.route('/lanes').get(LaneController.getLanes);

// Add a new Lane
router.route('/lanes').post(LaneController.addLane);

// Delete a lane by laneId
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

//Update lane
router.route('/lanes/:laneId').put(LaneController.updateLane)

export default router;

/*
DELETE /lanes/:laneId — usunięcie linii wraz z notatkami 
PUT /lanes/:laneId — update nazwy linii
*/