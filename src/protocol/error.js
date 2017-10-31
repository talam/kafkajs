const errorCodes = [
  {
    type: 'UNKNOWN',
    code: -1,
    retriable: false,
    message: 'The server experienced an unexpected error when processing the request',
  },
  {
    type: 'OFFSET_OUT_OF_RANGE',
    code: 1,
    retriable: false,
    message: 'The requested offset is not within the range of offsets maintained by the server',
  },
  {
    type: 'CORRUPT_MESSAGE',
    code: 2,
    retriable: true,
    message:
      'This message has failed its CRC checksum, exceeds the valid size, or is otherwise corrupt',
  },
  {
    type: 'UNKNOWN_TOPIC_OR_PARTITION',
    code: 3,
    retriable: true,
    message: 'This server does not host this topic-partition',
  },
  {
    type: 'INVALID_FETCH_SIZE',
    code: 4,
    retriable: false,
    message: 'The requested fetch size is invalid',
  },
  {
    type: 'LEADER_NOT_AVAILABLE',
    code: 5,
    retriable: true,
    message:
      'There is no leader for this topic-partition as we are in the middle of a leadership election',
  },
  {
    type: 'NOT_LEADER_FOR_PARTITION',
    code: 6,
    retriable: true,
    message: 'This server is not the leader for that topic-partition',
  },
  {
    type: 'REQUEST_TIMED_OUT',
    code: 7,
    retriable: true,
    message: 'The request timed out',
  },
  {
    type: 'BROKER_NOT_AVAILABLE',
    code: 8,
    retriable: false,
    message: 'The broker is not available',
  },
  {
    type: 'REPLICA_NOT_AVAILABLE',
    code: 9,
    retriable: false,
    message: 'The replica is not available for the requested topic-partitio',
  },
  {
    type: 'MESSAGE_TOO_LARGE',
    code: 10,
    retriable: false,
    message:
      'The request included a message larger than the max message size the server will accept',
  },
  {
    type: 'STALE_CONTROLLER_EPOCH',
    code: 11,
    retriable: false,
    message: 'The controller moved to another broker',
  },
  {
    type: 'OFFSET_METADATA_TOO_LARGE',
    code: 12,
    retriable: false,
    message: 'The metadata field of the offset request was too large',
  },
  {
    type: 'NETWORK_EXCEPTION',
    code: 13,
    retriable: true,
    message: 'The server disconnected before a response was received',
  },
  {
    type: 'GROUP_LOAD_IN_PROGRESS',
    code: 14,
    retriable: true,
    message: "The coordinator is loading and hence can't process requests for this group",
  },
  {
    type: 'GROUP_COORDINATOR_NOT_AVAILABLE',
    code: 15,
    retriable: true,
    message: 'The group coordinator is not available',
  },
  {
    type: 'NOT_COORDINATOR_FOR_GROUP',
    code: 16,
    retriable: true,
    message: 'This is not the correct coordinator for this group',
  },
  {
    type: 'INVALID_TOPIC_EXCEPTION',
    code: 17,
    retriable: false,
    message: 'The request attempted to perform an operation on an invalid topic',
  },
  {
    type: 'RECORD_LIST_TOO_LARGE',
    code: 18,
    retriable: false,
    message:
      'The request included message batch larger than the configured segment size on the server',
  },
  {
    type: 'NOT_ENOUGH_REPLICAS',
    code: 19,
    retriable: true,
    message: 'Messages are rejected since there are fewer in-sync replicas than required',
  },
  {
    type: 'NOT_ENOUGH_REPLICAS_AFTER_APPEND',
    code: 20,
    retriable: true,
    message: 'Messages are written to the log, but to fewer in-sync replicas than required',
  },
  {
    type: 'INVALID_REQUIRED_ACKS',
    code: 21,
    retriable: false,
    message: 'Produce request specified an invalid value for required acks',
  },
  {
    type: 'ILLEGAL_GENERATION',
    code: 22,
    retriable: false,
    message: 'Specified group generation id is not valid',
  },
  {
    type: 'INCONSISTENT_GROUP_PROTOCOL',
    code: 23,
    retriable: false,
    message:
      "The group member's supported protocols are incompatible with those of existing members",
  },
  {
    type: 'INVALID_GROUP_ID',
    code: 24,
    retriable: false,
    message: 'The configured groupId is invalid',
  },
  {
    type: 'UNKNOWN_MEMBER_ID',
    code: 25,
    retriable: false,
    message: 'The coordinator is not aware of this member',
  },
  {
    type: 'INVALID_SESSION_TIMEOUT',
    code: 26,
    retriable: false,
    message:
      'The session timeout is not within the range allowed by the broker (as configured by group.min.session.timeout.ms and group.max.session.timeout.ms)',
  },
  {
    type: 'REBALANCE_IN_PROGRESS',
    code: 27,
    retriable: false,
    message: 'The group is rebalancing, so a rejoin is needed',
  },
  {
    type: 'INVALID_COMMIT_OFFSET_SIZE',
    code: 28,
    retriable: false,
    message: 'The committing offset data size is not valid',
  },
  {
    type: 'TOPIC_AUTHORIZATION_FAILED',
    code: 29,
    retriable: false,
    message: 'Not authorized to access topics: [Topic authorization failed]',
  },
  {
    type: 'GROUP_AUTHORIZATION_FAILED',
    code: 30,
    retriable: false,
    message: 'Not authorized to access group: Group authorization failed',
  },
  {
    type: 'CLUSTER_AUTHORIZATION_FAILED',
    code: 31,
    retriable: false,
    message: 'Cluster authorization failed',
  },
  {
    type: 'INVALID_TIMESTAMP',
    code: 32,
    retriable: false,
    message: 'The timestamp of the message is out of acceptable range',
  },
  {
    type: 'UNSUPPORTED_SASL_MECHANISM',
    code: 33,
    retriable: false,
    message: 'The broker does not support the requested SASL mechanism',
  },
  {
    type: 'ILLEGAL_SASL_STATE',
    code: 34,
    retriable: false,
    message: 'Request is not valid given the current SASL state',
  },
  {
    type: 'UNSUPPORTED_VERSION',
    code: 35,
    retriable: false,
    message: 'The version of API is not supported',
  },
  {
    type: 'TOPIC_ALREADY_EXISTS',
    code: 36,
    retriable: false,
    message: 'Topic with this name already exists',
  },
  {
    type: 'INVALID_PARTITIONS',
    code: 37,
    retriable: false,
    message: 'Number of partitions is invalid',
  },
  {
    type: 'INVALID_REPLICATION_FACTOR',
    code: 38,
    retriable: false,
    message: 'Replication-factor is invalid',
  },
  {
    type: 'INVALID_REPLICA_ASSIGNMENT',
    code: 39,
    retriable: false,
    message: 'Replica assignment is invalid',
  },
  {
    type: 'INVALID_CONFIG',
    code: 40,
    retriable: false,
    message: 'Configuration is invalid',
  },
  {
    type: 'NOT_CONTROLLER',
    code: 41,
    retriable: true,
    message: 'This is not the correct controller for this cluster',
  },
  {
    type: 'INVALID_REQUEST',
    code: 42,
    retriable: false,
    message:
      "This most likely occurs because of a request being malformed by the client library or the message was sen't to an incompatible broker. See the broker logs for more details",
  },
  {
    type: 'UNSUPPORTED_FOR_MESSAGE_FORMAT',
    code: 43,
    retriable: false,
    message: 'The message format version on the broker does not support the request',
  },
  {
    type: 'POLICY_VIOLATION',
    code: 44,
    retriable: false,
    message: 'Request parameters do not satisfy the configured policy',
  },
]

const SUCCESS_CODE = 0
const failure = code => code !== SUCCESS_CODE

class KafkaProtocolError extends Error {
  constructor(code) {
    const error = errorCodes.find(e => e.code === code)
    super(error.message)
    this.type = error.type
    this.code = error.code
    this.retriable = error.retriable
    this.name = this.constructor.name
  }
}

module.exports = {
  failure,
  errorCodes,
  KafkaProtocolError,
}
